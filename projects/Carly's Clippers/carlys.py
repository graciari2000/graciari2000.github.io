text = "Carly’s Clippers"
width = 30

centered_text = f"{text:^{width}}"
print(centered_text)
print('\n')

hairstyles = ["bouffant", "pixie", "dreadlocks", "crew", "bowl", "bob", "mohawk", "flattop"]

prices = [30, 25, 40, 20, 20, 35, 50, 35]

last_week = [2, 3, 5, 8, 4, 4, 6, 2]

total_price = 0
for price in prices:
  total_price = total_price + price

print('Total Price: ' + '\n' + str(total_price))
print('\n')
number_of_prices = len(prices)
print('Number of Prices: ' + '\n' + str(number_of_prices))
print('\n')
average_price = total_price / number_of_prices
print('Average Haircut Price: ' + '\n' + str(average_price))
print('\n')
new_prices = [price - 5 for price in prices]
print('New Prices: ' + '\n' + str(new_prices))
print('\n')
total_revenue = 0
for i in range(len(hairstyles)):
  total_revenue += prices[i] * last_week[i]
print('Total Revenue: ' + '\n' + str(total_revenue))
print('\n')
average_daily_revenue = total_revenue / 7
print('Average Daily Revenue: ' + '\n' + str(average_daily_revenue))
print('\n')
cuts_under_30 = [hairstyles[i] for i in range(len(new_prices) - 1) if new_prices[i] < 30]
print('Cuts Under 30: ' + '\n' + str(cuts_under_30))
print('\n')