import random

secretnum = random.randint(1,5)
secretnum
count = 1

while(True):
    guess = int(input("Guess the number (1-5) >> "))
    if guess==secretnum:
        print("You guessed it right. Victory!")
        break
    else:
        print("Oh no! Try Again!")
        count += 1

print(f"You took {count} chances.") 
