function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init("7e08f747fd1ffbb228201979d0b99c84");

  // 카카오링크 버튼 생성
  Kakao.Link.createDefaultButton({
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "편나와", // 보여질 제목
      description: "편의점 다나와 웹사이트입니다.", // 보여질 설명
      imageUrl: "http://localhost:5000", // 콘텐츠 URL
      link: {
        mobileWebUrl: "http://localhost:5000",
        webUrl: "http://localhost:5000",
      },
    },
  });
}
