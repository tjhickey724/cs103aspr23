def letter_count(word):
    return {letter: word.count(letter) 
            for letter in set(word)}

print(letter_count('abba dabba doo'))