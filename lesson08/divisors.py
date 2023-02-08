def divisors(n):
    ''' return list of proper divisors of d '''
    return [d for d in range(2,n) if n % d == 0]
def is_prime(n):
    return len(divisors(n))==0

print(divisors(111))
primes_under_1000 = [p for p in range(1001) if is_prime(p)]
print(primes_under_1000)

