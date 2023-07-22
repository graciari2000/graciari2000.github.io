import random

def choose_word():
    words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"]
    return random.choice(words)

def display_word(word, guessed_letters):
    display = ""
    for letter in word:
        if letter in guessed_letters:
            display += letter
        else:
            display += "_"
    return display

def hangman():
    word_to_guess = choose_word()
    guessed_letters = []
    attempts = 6

    print("Welcome to Hangman!")
    print("You have 6 attempts to guess the word.")

    while attempts > 0:
        display = display_word(word_to_guess, guessed_letters)
        if display == word_to_guess:
            print("\nCongratulations! You guessed the word:", word_to_guess)
            break

        print("\n" + display)
        guess = input("Enter a letter: ").lower()

        if len(guess) != 1 or not guess.isalpha():
            print("Invalid input. Please enter a single letter.")
            continue

        if guess in guessed_letters:
            print("You already guessed that letter.")
            continue

        guessed_letters.append(guess)

        if guess not in word_to_guess:
            attempts -= 1
            print("Incorrect guess. Attempts left:", attempts)

    else:
        print("\nGame over! The word was:", word_to_guess)

if __name__ == "__main__":
    hangman()
