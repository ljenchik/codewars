def two_sum(numbers, target):
    for x in (numbers[:-1]):
        print(x)
        for y in (numbers[numbers.index(x):]):
            print(y)
            if x + y == target:
                return [numbers.index(x), numbers.index(y, numbers.index(x) + 1)]


print(two_sum([2, 2, 3], 4));