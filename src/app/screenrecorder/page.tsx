'use client'
import React, { useRef } from 'react'

const ScreenRecorder = () => {
  // Purpose: Recorded video ke chote-chote tukdo (chunks) ko store karne ke liye ek "dabba" (array) banana.
  // Agar yeh nahi likha toh (Problem): Video save karne ki jagah nahi milegi aur recording ka data gayab ho jayega. (useState() isliye use nahi ki kyuki har naya chunk aane par component faltu me re-render hota).
  const chunkRef = useRef<Blob[]>([]);

  // Purpose: mediaRecorder ko globally store karna taaki doosre functions (jaise stopRec) me isko access karke recording roki ja sake.
  // Agar yeh nahi likha toh (Problem): Start toh ho jayega par jab stop button dabaoge, toh code ko pata hi nahi hoga ki kaunse recorder ko rokna hai.
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRec = async () => {

    try {
      // Purpose: User ke browser se unki screen (ya kisi specific tab) ko record karne ki permission mangna aur uska video data (stream) lena.
      // Agar yeh nahi likha toh (Problem): Browser aapko screen capture karne ka wo popup (jisme likha hota hai "Share your screen") nahi dikhayega. Aapke paas record karne ke liye koi source (video) hi nahi hoga, aur aage ka pura code fail ho jayega.
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })

      // Purpose: Us aati hui video stream ko record karne ke liye browser ka in-built recording engine chalu karna.
      // Agar yeh nahi likha toh (Problem): Aapke paas stream toh hogi (user ki screen dikh rahi hogi), lekin usko background mein record karke process karne wala engine hi nahi hoga.
      const mediaRecorder = new MediaRecorder(stream);

      // Purpose: Record engine ko globally store kar liya ref me.
      mediaRecorderRef.current = mediaRecorder;

      // Purpose: Asli me background me recording chalu karna.
      // Agar yeh nahi likha toh (Problem): Sab set rahega par recording actually start nahi hogi.
      mediaRecorder.start();

      // Purpose: Jaise-jaise video record ho rahi hai, uske chote-chote tukdo (chunks) ko pakad kar apne chunkRef wale dabbe mein daalna.
      // Agar yeh nahi likha toh (Problem): Recording toh hogi, par usko save karne wala koi nahi hoga. Pura video data hawa me ud jayega.
      mediaRecorder.ondataavailable = ((e) => {
        if (e.data.size > 0) {
          chunkRef.current.push(e.data);
        }
      })

      // Purpose: Jab recording puri tarah stop ho jaye, tab saare chunks ko jod kar ek final file banana aur usko download karwana.
      // Agar yeh nahi likha toh (Problem): User ko video record ho kar milegi hi nahi (Pehle wale logic me aap bina data aaye hi download karwa rahe the, isliye blank file aati thi).
      mediaRecorder.onstop = () => {
        // Purpose: Saare tukdo (chunks) ko milakar ek properly formatted video file (webm) banana.
        const blob = new Blob(chunkRef.current, { type: 'video/webm' });

        // Purpose: Us video file ka ek temporary link (URL) banana jisse browser use download kar sake.
        const url = URL.createObjectURL(blob);

        // Purpose: Ek nakli <a> tag (link) banana, usme video ka link daalna aur automatically click karwana taaki download khud shuru ho jaye.
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'screenrecording.webm';
        downloadLink.click();

        // Purpose: Ek baar download ho gaya, toh agle recording ke liye us dabbe ko dubara khali kar dena.
        // Agar yeh nahi likha toh (Problem): Agli baar record karoge toh pichli video ke sath nayi video jud jayegi (mix ho jayegi).
        chunkRef.current = [];
      }

    } catch (err) {
      alert(err)
    }
  }

  const stopRec = () => {
    // Purpose: Chalu recording ko rokna. Jaise hi ye line chalegi, upar likha hua `mediaRecorder.onstop` wala code trigger ho jayega aur video download ho jayegi.
    // Agar yeh nahi likha toh (Problem): Recording chalti hi rahegi, background me storage khati rahegi aur kabhi khatam nahi hogi.
    mediaRecorderRef.current?.stop()
  }

  return (
    <div>ScreenRecording
      <div className='flex justify-center items-center bg-white h-screen w-auto'>
        <button className='bg-gradient-to-r from-green-400 to-blue-900 m-3 px-8 py-3 rounded-full w-auto transition-all duration-300 ease-in-out hover:from-blue-900 hover:to-green-400 hover:-translate-y-1 active:translate-y-0 focus:ring-4 font-semibold '
          onClick={startRec}>
          start
        </button>
        <button className='bg-gradient-to-r from-red-300 to-pink-900 m-3 px-8 py-3 rounded-full w-auto font-semibold
hover:from-indigo-900 hover:to-red-600
 hover:-translate-y-1 active:shadow-xl
transition-all duration-300 ease-in-out active:translate-y-0 focus:ring-4 focus:ring-black-400  '
onClick={stopRec}

        >
          pause
        </button>
        <button className="px-8 py-3 m-3 font-semibold text-white transition-all duration-300 ease-in-out rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-md focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50">
          Click Me
        </button>
      </div>

    </div>
  )
}
export default ScreenRecorder
