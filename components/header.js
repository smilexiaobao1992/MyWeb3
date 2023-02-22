export default function MyHeader() {
    return (
      <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/">Home</a></li>
            <li tabindex="0">
              <a class="justify-between z-auto">
              Rank
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </a>
              <ul class="p-2 z-50 shadow bg-base-100">
              <li><a href="/coingecko/hot">Hot</a></li>
              <li><a href="/coingecko/stat">Rank 24</a></li>
              </ul>
            </li>
            <li><a href="/about">About us</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl"><img src="/logo.png" width="75" height="75"></img></a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-1xl">
          <li><a href="/"> Home</a></li>
          <li tabindex="0" class="z-0 hover:z-50">
            <a class="z-auto">
              Rank
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2 z-50 shadow bg-base-100">
              <li><a href="/coingecko/hot">Hot</a></li>
              <li><a href="/coingecko/stat">Rank 24</a></li>
            </ul>
          </li>
          <li><a href="/about">About us</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn">braveguozhi.eth</a>
      </div>
    </div>)
  }
