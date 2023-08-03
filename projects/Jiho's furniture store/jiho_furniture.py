inventory = ["twin bed", "twin bed", "headboard", "queen bed", "king bed", "dresser", "dresser", "table", "table", "nightstand", "nightstand", "king bed", "king bed", "twin bed", "twin bed", "sheets", "sheets", "pillow", "pillow"]
inventory_len = len(inventory)
print(inventory)
print('\n')
print(inventory_len)
first = inventory[0]
print(first)
print('\n')
last = inventory[-1]
print(last)
print('\n')
inventory_2_6 = inventory[2 : 6]
print(inventory_2_6)
print('\n')
first_3 = inventory[:3]
print(first_3)
print('\n')
twin_beds = inventory.count('twin bed')
print(twin_beds)
print('\n')
removed_item = inventory.pop(4)
print(removed_item)
print('\n')
inventory.insert(10 , '19th Century Bed Frame')
print(inventory)
print('\n')
inventory = sorted(inventory)
print(inventory)