weight = 41.5
# Ground Shipping
if weight <= 2:
    PricePerPound = 1.50
    FlatCharge = 20.00
elif weight > 2 and weight <= 6:
    PricePerPound = 3.00
    FlatCharge = 20.00
elif weight > 6 and weight <= 10:
    PricePerPound = 4.00
    FlatCharge = 20.00
else:
    PricePerPound = 4.75
    FlatCharge = 20.00

cost = FlatCharge + (PricePerPound * weight)
print(cost)

#Premium Shipping 
premium = 125.00
print(premium)

#Drone Shipping
if weight <= 2:
    DronePricePerPound = 4.50
    FlatCharge = 0.00
elif weight > 2 and weight <= 6:
    DronePricePerPound = 9.00
    FlatCharge = 0.00
elif weight > 6 and weight <= 10:
    DronePricePerPound = 12.00
    FlatCharge = 0.00
else:
    DronePricePerPound = 14.25
    FlatCharge = 0.00

drone_shipping = FlatCharge + (DronePricePerPound * weight)
print(drone_shipping)