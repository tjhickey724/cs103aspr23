use std::collections::HashMap;
use tokio::net::TcpListener;
use tokio::prelude::*;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let listener = TcpListener::bind("127.0.0.1:8080").await?;

    let mut clients = HashMap::new();
    let mut incoming = listener.incoming();

    while let Some(socket) = incoming.next().await {
        let socket = socket?;
        println!("Accepted client: {}", socket.peer_addr()?);

        let (reader, writer) = socket.split();

        let client_id = clients.len();
        clients.insert(client_id, writer);

        tokio::spawn(async move {
            let mut buf = [0; 1024];

            loop {
                let n = match reader.read(&mut buf).await {
                    Ok(n) if n == 0 => return,
                    Ok(n) => n,
                    Err(e) => {
                        println!("Failed to read data from client {}: {}", client_id, e);
                        return;
                    }
                };

                for (_, writer) in &clients {
                    if let Err(e) = writer.write_all(&buf[0..n]).await {
                        println!("Failed to write data to client: {}", e);
                        return;
                    }
                }
            }
        });
    }

    Ok(())
}
