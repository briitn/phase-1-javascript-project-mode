# My Javascript project

My project is a shopping website that allows users to buy up to 5 houses of a specific house(family) from the game of thrones series.

## Introduction
We are getting information on some of the houses from a game of thrones api. We use that info to build a JSON server where we store our data. We should then make a fetch request upon the DOM content loading, and with the response we get, we can then build 10 cards and have the client render them for the user to be able to buy the houses they want to buy.

## Goals and features
My Major Goal for the app is to make everything persists so that even if the site is reloaded, it remembers everything the user already did. The website has a wallet that gives each user a set amount of money to buy each house with and we want our app to remember how much money each user has even after refreshing. We also want our app to remember how many houses a user bought and sold. Each user can only buy up to 5 houses from each house(family) and if a user has 5 houses, they shouldnt be able to buy anymore.

## More deliverables

I want my app to have a popup that asks the user to confirm whether or not they want to buy or sell a house. I have to add if statements to check if the user has enough money to buy a house and to check if a user owns a house to sell. I want to add alert popups for when a user does not meet a requirement to buy or sell a house. I also want the money in a user's wallet to decrease by the cost of a house when a user buys a house, and increase by the cost of the house when a user sells a house.       
![](https://media1.giphy.com/media/7hpAl0fSCr2iYlRzZW/giphy.gif?cid=790b7611cb52e9d9221fce39bad9a0da8a704feac078748c&rid=giphy.gif&ct=g)

I also want to style the cards and some text elements with CSS . 



## Completed project
My completed app should have 10 cards with info from the game of thrones api about some of the families in the series. It should have a wallet with a set amount of money. It should also have confirm and alert pop ups. Users should be able to buy and sell houses. Website should remember how many houses a user bought and how much money is in a user's wallet. 