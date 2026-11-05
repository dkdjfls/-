import './App.css'
const profile = {
  name: "갈갈",
  intro: "비가싫어요",
  imageUrl:"/다운로드 (4).jpg"
} 
const App = () => {

  return (
  <div className="profile-card">
   <header>
    <h1>안녕하세요, {profile.name}입니다.</h1>
    <p className="intro">{profile.intro}</p>
   </header>

   <main>
    <section>
      <h2>나에대해</h2>

      <img
      className="profile-image"
      src={profile.imageUrl}
      alt={`$[profile.name}의 프로필 이미지`}/>

      <p>저는 웹개발을 공부하고 있습니다</p>
    </section>

    </main>
  </div>
  );
 }
export default App