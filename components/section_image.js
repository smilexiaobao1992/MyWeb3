import Link from "next/link"

export default function SectionImage() {
    return(
        // 文本
        <div class="flex justify-center mt-10">
        <div class="w-full max-w-[6*24rem]">   
        <div class="text-center ml-2">
          <h2 class="text-4xl">🎨AI绘画</h2>
        </div>
        <div class="flex flex-wrap justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://www.midjourney.com/favicon-32x32.png" alt="Album" class="max-h-10 max-w-10"/>Midjourney</h3>
                <p> AI绘画神器</p>
                <div class="card-actions justify-end">
                <Link href="https://www.midjourney.com/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
       
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://www.photoroom.com/favicons/favicon-32x32.png" alt="Album" class="max-h-10 max-w-10"/>PhotoRoom</h3>
                <p> 擦除任何背景、对象</p>
                <div class="card-actions justify-end">
                    <Link href="https://www.photoroom.com/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="../icon/openai.png" alt="Album" class="max-h-10 max-w-10"/>造梦师</h3>
                <p>只需一句话，让你的文字变成画作</p>
                <div class="card-actions justify-end">
                    <Link href="https://printidea.art/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://arc.tencent.com/logo.ico" alt="Album" class="max-h-10 max-w-10"/>ARC Lab</h3>
                <p>一款提供照片修复、抠图、画质增强的在线工具</p>
                <div class="card-actions justify-end">
                    <Link href="https://arc.tencent.com/zh/ai-demos/faceRestoration" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://www.artbreeder.com/favicon-dark.png" alt="Album" class="max-h-10 max-w-10"/>Artbreeder</h3>
                <p>人工智能合成创意工具</p>
                <div class="card-actions justify-end">
                    <Link href="https://www.artbreeder.com/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://stockimg.ai/logo192.png" alt="Album" class="max-h-10 max-w-10"/>Stockimg AI</h3>
                <p>生成各种各样的设计元素,包括logo、插画、图片壁纸等</p>
                <div class="card-actions justify-end">
                    <Link href="https://stockimg.ai/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://nijijourney.com/assets/sizigi/favicon-32x32.png" alt="Album" class="max-h-10 max-w-10"/>niji·journey</h3>
                <p>二次元ai绘画</p>
                <div class="card-actions justify-end">
                    <Link href="https://nijijourney.com/zh/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://getimg.ai/icons/favicon-32x32.png" alt="Album" class="max-h-10 max-w-10"/>Getimg.ai</h3>
                <p> 关键词生成图片的AI工具</p>
                <div class="card-actions justify-end">
                    <Link href="https://getimg.ai/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://framerusercontent.com/images/QUbaKg7h1kTm0wLek7YB9vhNe1c.png" alt="Album" class="max-h-10 max-w-10"/>Dreamlike.art</h3>
                <p>AI图像生成</p>
                <div class="card-actions justify-end">
                    <Link href="https://dreamlike.art/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-2">
            <div class="card-body">
                <h3 class="card-title">
                <img src="https://yige.baidu.com/favicon.ico" alt="Album" class="max-h-10 max-w-10"/>文心一格 飞桨</h3>
                <p>AI艺术和创意辅助平台</p>
                <div class="card-actions justify-end">
                    <Link href="https://yige.baidu.com/" class="underline text-blue-600">Join</Link>
                </div> 
            </div>
        </div>
        </div>
        </div>
    </div>
    

)}