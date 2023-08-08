def create_validator (mode,number):
    if mode == 'Max':
        return lambda value: value < number
    elif mode == 'Min': 
        return lambda value: value > number
    
is_below_max = create_validator("Max", 31)

print(is_below_max(15))
print(is_below_max(32))