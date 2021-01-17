# What Is a Composite design pattern
> “Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects Uniformly”
> -- <cite>[GoF]</cite>


# Implementation
> Assume there is a  restaurant that offers different kinds of food some of them are single item(ex burger) and others are Combo-meal (ex burger and fries), to get its menu we need name and price of each item, the actual price in case of a single item or total for a combo, to apply composite pattern at this example we need to identify three participants: Component, Leaf, and Composite.  

> ### Leaf (Single menu item (burger, pizza .. etc))
> Defines the behavior of primitive objects that have no children

> ### Composite (Meal)
> Defines behavior for components having children including children management operations.