# UsedCarProjectWithBlockChainServer
> 해당 프로젝트는 제 계정내에 있는 UsedCarProjectWithBlockChainClient와 연동하도록 만들어졌습니다. 


## 해당 파일을 ./config/default.json 이름으로 만들어야합니다.
```json
{
    "mongoURI":
        "mongodb+srv://MONGODBATLASIDNAME:MONGODBATLASPASSWORD@blockchain.f5p6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}
```
* MONGODBATLASIDNAME는 몽고디비 ATLAS의 어드민 아이디
* MONGODBATLASPASSWORD는 몽고디비 ATLAS의 어드민 패스워드를 넣어야합니다.


### 구동법
$ npm run app
