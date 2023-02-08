words = "a rose is a rose is a rose".split(" ")
wordset = set(words)
newdict = {w:words.count(w) for w in wordset}
print(newdict)
