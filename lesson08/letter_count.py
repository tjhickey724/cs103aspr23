def letter_count(string):
    letter = [*string]
    letter_exist = set(letter)
    new_dict = {l:letter.count(l) for l in letter_exist}
    return new_dict
print(letter_count('a rose is a rose is a rose'))
