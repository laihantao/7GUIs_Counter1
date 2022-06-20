7GUIs_Counter_app

There are two components in this app, button and label. So, I use span to display the number, and use button to call the function.

The initial number of the label is 0, so I use useState to initialize its number with 0.

The function is to increment the number by 1, rather than using state + 1, I use “a = a+1”

This will keep use the previous number to add 1, not overriding the regular one.
