# 편나와 : 편의점 다 나와!

## Overview

<img width="400" alt="thumbnailimage" src="https://user-images.githubusercontent.com/90249131/143259037-9278699a-9b21-4db6-b726-2ed5896fd323.png">

- 누구나 한번쯤은 편의점에서 콜라 하나를 사먹은 다음날 다른 편의점에서 1+1 행사를 하는 것 을 보고 왠지 모르게 아쉬웠던 기억이 있을 것 이다. \
  [CU](https://cu.bgfretail.com/event/plus.do), [GS25](http://gs25.gsretail.com/gscvs/ko/products/event-goods), [세븐일레븐](https://www.7-eleven.co.kr/product/presentList.asp) 등 대다수의 편의점 회사들이 진행되는 행사정보를 홈페이지에 안내하지만, 무언가 하나를 사기위해 모든 회사의 페이지를 살펴보는건 꽤나 귀찮은 일이다.\
  그래서 우리 "편나와"에서는 물건을 집고 결제하기 전에 잠시 고민해 볼 수 있게한다. \
  핸드폰으로 손쉽게 바코드를 찍어보고, 다른 편의점에서 세일중이면? 길건너에 바로 그 편의점이 있다면? 조용히 돌아나와 그곳에서 물건을 사면된다.

## Example
1. main 화면  
![image](https://user-images.githubusercontent.com/50107564/143673854-a6acac04-841e-4d2f-976d-6d71f0b243ed.png)
2. 설명  
![image](https://user-images.githubusercontent.com/50107564/143673927-b87c9827-a228-43d4-b375-bfa38fb7a18f.png)
3. 결과 페이지  
4. demo 동영상  
[youtube](https://youtu.be/M84WRA6555E)  

## How to use  

1. [편나와](https://oss-project-1cbed.web.app/) 클릭
2. 핸드폰 카메라로 바코드 스캔
3. **세일중인 편의점**과 가격이 표시된다.

## 1. Releases

- v.0.1.0 - Main page, Result page 생성
- v.0.2.0 - 바코드, 편의점 크롤링
- v.0.3.0 - 이미지 수정, 버튼 삭제
- v.0.9.0 - 데모 데이터베이스 업로드, 모든 기능 구현 완료
- v.1.0.0 - (예정)최종 데이터베이스 업로드

## 2. History

- 11/12 \
  web front v0.1 버전 제작 \
  git 버전, 프로젝트 진행 관련 회의

- 11/16 \
  편나와 서비스 로고 이미지 제작  
  지도 api 수정 \
  웹 사이트 디자인 수정, 설명 수정 \
  web front v0.2 버전 추가

- 11/21 \
  demo 영상 제작 \
  발표자료 제작 \
  깃 관리  
 
 - 11/28 \
  최종 정리, 마무리\

## 3. Future

현재 전체 물건의 가격정보를 제공하는 편의점이 CU를 제외하면 없기 때문에, 가격은 CU의 것을 기준으로, 세일하는 편의점은 각 편의점의 가격을 제공하고 있습니다. \
빠른 시일 내로 해당 문제를 해결할 생각입니다.  
현제 크롤링한 데이터중 일부만 파이어베이스 db에 업로드 된 상태입니다. 최종 발표 전까지 문제를 개선할 계획입니다. \  

## 4. API reference

- [Firebase](https://firebase.google.com/?hl=ko) : 웹서버, 데이터베이스
- [Html5-QRCode](https://github.com/mebjas/html5-qrcode) : HTML5 기반 1,2차원 바코드 인식
- [KakaoMap API](https://apis.map.kakao.com/) : 카카오맵 api

## 5. Works

- 배수영: Frontend developer / Web designer

> 1. 사이트 html 디자인 및 제작
> 2. 카카오 지도 api 적용
> 3. 로고 디자인

- 김대희: Product manager

> 1. 서비스 기획
> 2. 바코드 인식기능 구현
> 3. Git repository 관리

- 김수민: DB engineer

> 1.  행사정보 크롤링, 바코드-상품 매칭
> 2.  데이터베이스 관리

## 6. [License](https://github.com/JiyunIm00/ossp_final_project/blob/main/LICENSE)

