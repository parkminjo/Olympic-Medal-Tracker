# 🏅 Personal Project: 메달 집계 관리

### 🕰️ 개발 기간
25.01.21 ~ 25.01.23

### ⚙️ 기술 스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

---

# 📢 프로젝트 소개
메달 집계 관리 프로젝트는 사용자가 입력한 나라별 메달 데이터를 관리하고,

금메달 개수가 가장 많은 순서로 자동 정렬하여 보여주는 애플리케이션입니다.

CRUD 기능을 구현하여 사용자는 메달 데이터를 등록, 수정 삭제할 수 있도록 설계하였습니다.

## 주요 기능
📍 메달 데이터 관리 (CRUD)

📍 자동 정렬 기능(금메달순, 합계순)

📍 local storage 활용

## 컴포넌트 구조
- **메달 입력 폼**: 사용자가 나라명, 메달 수를 입력하는 UI
- **메달 집계 리스트**: 메달 집계 리스트를 보여주는 UI
- **금메달순/합계순 정렬 버튼**: 메달 집계를 금메달순 혹은 합계순으로 보여주는 UI

---
# 💻 기능 소개

### 1️⃣ 메달 데이터 관리 (CRUD)
나라별 메달 정보를 등록, 수정, 삭제할 수 있습니다.

이미 등록된 나라를 추가하려고 할 때, 등록되지 않은 나라를 수정하려고 할 때 경고 알림을 제공합니다.

### 2️⃣ 자동 정렬 기능(금메달순, 합계순)
버튼을 누르면 금메달순/합계순으로 자동 정렬합니다.

### 3️⃣ local storage 활용
사용자가 등록한 데이터를 유지하기 위하여 local storage를 이용하였습니다.

---
# 🔥 트러블 슈팅
[사용자가 입력한 모든 값을 배열에 어떻게 넣을까?](https://home1204.tistory.com/69)

[child in a list should have a unique "key" prop!!](https://home1204.tistory.com/70)

[return했는데도 왜 메달 리스트를 보여주는걸까](https://home1204.tistory.com/71)

[조건에 따라 컴포넌트 보여주기](https://home1204.tistory.com/73)

---
# 🌟 느낀점
React를 배운지 이틀 밖에 안된 상태에서 바로 프로젝트를 진행하여 새로운 라이브러리에 적응하는 것이 쉽지 않았습니다. 그중 state와 props가 무엇인지 이해하고 활용하는 데 시간이 걸렸습니다. 하지만 직접 기능을 구현하고 오류를 해결하는 과정을 통해 React의 효율성과 편리함을 체감할 수 있었습니다.

바로 직전에 바닐라 Javascript를 이용한 프로젝트를 진행해서 그런가 편리함을 더 크게 느꼈습니다. 바닐라 JavaScript로 DOM을 조작할 때는 변경 사항이 많아질수록 코드가 복잡해졌지만, React에서는 컴포넌트 덕분에 HTML 요소에 쉽게 접근하고 state를 변경할 수 있었습니다.

이번 프로젝트를 통해 단순히 기능을 구현하는 것을 넘어, React의 구조를 이해하고 왜 이것을 사용하는지 직접 체감할 수 있었습니다.

---
# 🧬 프로젝트 구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜MedalForm.jsx
 ┃ ┣ 📜MedalList.jsx
 ┃ ┗ 📜RadioButton.jsx
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
