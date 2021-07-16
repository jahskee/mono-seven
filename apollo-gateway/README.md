##

```gql:
query getAccount{
  account(id: 1) {
    id
    name
    email
  }
}
```

```js:
{
  viewer {
    id
    email
  }
	hello
}```

## Kill a service in specific port
```
lsof -n -i4TCP:4000 | grep LISTEN
sudo kill -9 [pid] 
```