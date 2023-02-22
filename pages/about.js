export default function About() {
    return(
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="unnamed.png" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">BraveGuozhi</h1>
      <p class="py-6">From tomorrow on,I will be a happy man;Grooming, chopping,and traveling all over the world.From tomorrow on,I will care foodstuff and vegetable,Living in a house towards the sea,with spring blossoms.</p>
      <button class="btn btn-primary" onClick={() => window.location.href='https://github.com/smilexiaobao1992'}>GO GitHub</button>
    </div>
  </div>
</div>
    )
}
