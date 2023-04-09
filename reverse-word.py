def reverse_words(text):
    a = text.split(' ')
    b = [];
    for x in a:
        b.append(x[::-1])
    return ' '.join(b)

print(reverse_words("Hello world"));