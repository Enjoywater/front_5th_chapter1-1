(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const w=t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):null},g=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},S=t=>{localStorage.removeItem(t)},u=(t,e,o=!1)=>o?t.querySelector(e).value:t.querySelector(e).value.trim(),i={SET_USER:"SET_USER",SYNC_USER:"SYNC_USER"},d=(t,e)=>({type:t,payload:e}),E={user:null},L=(t,e)=>{switch(e.type){case i.SET_USER:return{...t,user:e.payload};default:return t}},R=(t,e,o)=>{const n=[];let s=e;return Object.freeze({state:s,reducer:t,getState:()=>s,dispatch:r=>{s=t(s,r),o&&o(s,r),n.forEach(y=>y(s))},subscribe:r=>{n.push(r),r(s)}})},_=(t,e)=>{if(e.type===i.SYNC_USER){const o=w("user");o&&a.dispatch(d(i.SET_USER,o))}if(e.type===i.SET_USER){if(e.payload===null){S("user");return}g("user",e.payload)}},a=R(L,E,_);a.subscribe(t=>{console.log("상태가 변경되었습니다:",t),t.user&&g("user",t.user)});const p=(t,e)=>t===e?"text-blue-600 font-bold":"text-gray-600",h=({path:t,isLoggedIn:e})=>{const o=`
      <li><a href="/profile" class="${p(t,"/profile")}">프로필</a></li>
      <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>
  `,n=`
      <li><a href="/login" class="${p(t,"/login")}">로그인</a></li>
  `;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
      <nav class="bg-white shadow-md p-2">
        <ul class="flex justify-around">
          <li><a href="/" class="${p(t,"/")}">홈</a></li>
          ${e?o:n}
        </ul>
      </nav>
    </header>
  `},v=`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,N=()=>{const{user:t}=a.getState();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${h({path:"/",isLoggedIn:!!t})}

        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">홍길동</p>
                  <p class="text-sm text-gray-500">5분 전</p>
                </div>
              </div>
              <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">김철수</p>
                  <p class="text-sm text-gray-500">15분 전</p>
                </div>
              </div>
              <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">이영희</p>
                  <p class="text-sm text-gray-500">30분 전</p>
                </div>
              </div>
              <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">박민수</p>
                  <p class="text-sm text-gray-500">1시간 전</p>
                </div>
              </div>
              <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">정수연</p>
                  <p class="text-sm text-gray-500">2시간 전</p>
                </div>
              </div>
              <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          </div>
        </main>

        ${v}
      </div>
    </div>
`},P=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,T=()=>{const{user:t}=a.getState();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${h({path:"/profile",isLoggedIn:!!t})}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${(t==null?void 0:t.username)||""}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${(t==null?void 0:t.email)||""}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${(t==null?void 0:t.bio)||""}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${v}
      </div>
    </div>
`},U=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,b={"/":{component:N},"/login":{component:P},"/profile":{component:T,needAuth:!0},404:{component:U}},x=location.hash!=="",m=t=>{const{user:e}=a.getState(),o=x?location.hash.slice(1)||"/":t,n=b[o]||b[404];if(n.needAuth&&!e){c("/login");return}if(o==="/login"&&e){c("/");return}const s=document.getElementById("root"),l=document.createElement("div");l.innerHTML=n.component(),s.innerHTML="",s.appendChild(l)},c=t=>{x?window.location.hash=t:history.pushState({},"",t),m(t)},j=t=>{const e=t.target.closest("a");e&&e.origin===location.origin&&(t.preventDefault(),c(e.pathname))},I=t=>{t.preventDefault();const e=t.target,o=u(e,"input[type='text']");a.dispatch(d(i.SET_USER,{username:o,email:"",bio:""})),c("/profile")},O=t=>{t.preventDefault();const e=t.target,o=u(e,"input[name='username']"),n=u(e,"input[name='email']"),s=u(e,"textarea[name='bio']"),{user:l}=a.getState();a.dispatch(d(i.SET_USER,{...l,username:o,email:n,bio:s})),alert("프로필 업데이트가 완료되었습니다."),c("/profile")},$=t=>{switch(t.preventDefault(),t.target.id){case"login-form":{I(t);return}case"profile-form":{O(t);return}default:c("/404");return}},C=t=>{t.target.closest("#logout")&&(t.preventDefault(),a.dispatch(d(i.SET_USER,null)),c("/login"))},f=()=>{window.addEventListener("popstate",()=>m(location.pathname)),window.addEventListener("hashchange",()=>m(location.hash.slice(1))),document.addEventListener("click",j),document.addEventListener("click",C),document.addEventListener("submit",$),a.dispatch(d(i.SYNC_USER)),m(location.pathname)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f();
