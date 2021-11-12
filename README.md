# 2021_OSS_pyunawa

2021 2학기 오픈소스 소프트웨어 실습

1. file 구성
   - public
     - /bootstrap : 안봐도 됨.
     - /css : 안봐도 됨.
     - /firebase
       - /config.js
         - firebase 설정
       - /read.js
         - 바코드 스캔해서 알 수 있는 고유 제품 key 값 target 변수에 넣기
         - db에 저장된 database 읽어서 html에 출력
         -
       - /write.js
         - 여기에 크롤링 코드 넣어주면 될 것 같습니다. (예시 코드는 하나씩 넣어주는 코드 짜봤는데 반복문 사용해서 모든 데이터 넣어주기)
         - 크롤링 데이터 읽어서 db에 넣기
         -
     - /img
       - /team : 1.jpg,2.jpg,3.jpg 에 각자 넣고 싶은 사진 넣기.
       - 로고 사진은 나중에 대체(편나와 로고 사진)
       - 나머지는 안봐도 됨.
     - /inc : 안봐도 됨.
     - /js : 안봐도 됨.
     - /less : 안봐도 됨.
     - 404.html : 안봐도 됨.
     - index.html : 메인 페이지
     - result.html : 결과 페이지
       - 지금은 index.html 에서 "go-scan" 버튼 누르면 바로 result.html로 넘어가고 임의로 제품 하나 db에서 읽고 불러오는 걸로 설정해 놨고, 여기서 버튼 누르면 바코드 찍는 창으로 넘어가는 거 추가하면 될 것 같습니다.

## 회의 2021-11-12

~11/21까지

1. git open source 각자 commit 한거 comment 남기기
2. 웹페이지에 api 넣기, version control
3. 바코드 찍는 코드
4. crolling

~11/

1. 영상
2. 발표자료
3. png 로고
4. 깃 readme 수정
