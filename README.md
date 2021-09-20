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


<hr/>
<h3>1. 구현한 기능</h3>
<ul>
  <li>로그인, 회원가입</li>
  <li>블록체인, 홈페이지에 팔 차량 등록</li>
  <li>차량 진단</li>
  <li>차량 구매</li>
  <li>차량 배달</li>
</ul>
<hr/>

<h3>2. 프로젝트 설계</h3>


![design](https://user-images.githubusercontent.com/19809346/133971040-902cd4fd-a21f-4348-a2f9-a5c3f1e993ea.png)
![mern](https://user-images.githubusercontent.com/19809346/133971144-5e184e7a-4e80-4d74-9bfc-72fa222a73c1.PNG)
![슬라이드11](https://user-images.githubusercontent.com/19809346/133972305-8a8e476f-6e8e-4f01-b294-fe190d61b99c.PNG)
![슬라이드12](https://user-images.githubusercontent.com/19809346/133972307-c18aaf27-38da-42d9-9318-b5ce59ea120b.PNG)
![슬라이드13](https://user-images.githubusercontent.com/19809346/133972309-1e255baa-a14e-4617-a2dc-42a10100ec5a.PNG)
![슬라이드14](https://user-images.githubusercontent.com/19809346/133972312-3fd081b6-7459-4e9d-ac6a-bcfbc71794a4.PNG)
![슬라이드15](https://user-images.githubusercontent.com/19809346/133972313-eab8756d-baf9-410f-87c6-e08e2515fa16.PNG)
![슬라이드16](https://user-images.githubusercontent.com/19809346/133972315-7854bb72-bdc4-4d43-9f93-7ff5379012cb.PNG)
![슬라이드17](https://user-images.githubusercontent.com/19809346/133972316-cc8d5e56-8028-491f-b857-b02b58810662.PNG)
![슬라이드18](https://user-images.githubusercontent.com/19809346/133972317-d6ebd854-9f4c-41c9-9d31-ac9608b81d46.PNG)
![슬라이드19](https://user-images.githubusercontent.com/19809346/133972319-2a66916f-7522-4ab5-b434-e2bf544fabc0.PNG)
![슬라이드20](https://user-images.githubusercontent.com/19809346/133972321-66af80d3-6c2d-4513-b775-8eff7e901b8f.PNG)
![슬라이드21](https://user-images.githubusercontent.com/19809346/133972322-6a29a48e-00d5-4eb8-bfef-36cf18431852.PNG)


