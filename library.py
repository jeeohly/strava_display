class Book: 
    def __init__(self, name):
        self.name = name 

class User: 
    def __init__(self, name):
        self.name = name 
        self.borrowed = set() 

class Library: 
    def __init__(self):
        self.books = {} # book_name: book_object 
        self.available = {} # book_name: copies (int)
        self.users = {} # username: user_object
    
    def add_book(self, name): 
        self.books[name] = Book(name)
        self.available[name] = self.available.get(name, 0) + 1  
    
    def add_user(self, username):
        self.users[username] = User(username)

    def checkout(self, username, book_name):
        if book_name in self.available and self.available[book_name]:
            self.available[book_name] -= 1 
            self.users[username].borrowed.add(book_name)
    
    def checkin(self, username, book_name):
        if book_name in self.users[username].borrowed: 
           self.available[book_name] += 1 
           self.users[username].borrowed.remove(book_name) 

lib = Library()
lib.add_user("Gio")
lib.add_book("Moby")
print(lib.books)
lib.checkout("Gio", "Moby")
print(lib.available)
print(lib.users["Gio"].borrowed)
lib.checkin("Gio", "Moby")
print(lib.available)
print(lib.users["Gio"].borrowed)
