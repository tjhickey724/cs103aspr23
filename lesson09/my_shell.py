#!/usr/bin/python3

'''
my_gpt_demo.py 
Enter a prompt: Write a Python program to implement a simple shell \
                to process the ls, cd, pwd, and mkdir commands
'''

import os

def my_shell():
    while True:
        command = input("$ ").split()
        if len(command) == 0:
            continue
        if command[0] == "ls":
            os.system("ls")
        elif command[0] == "cd":
            if len(command) > 1:
                os.chdir(command[1])
            else:
                os.chdir(os.environ['HOME'])
        elif command[0] == "pwd":
            print(os.getcwd())
        elif command[0] == "mkdir":
            if len(command) > 1:
                os.mkdir(command[1])
            else:
                print("Error: No directory name specified")
        elif command[0] == "exit":
            break
        else:
            print("Error: command not found")

if __name__=='__main__':
    my_shell()
