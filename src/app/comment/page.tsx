"use client"
// ↑ Kyu? Next.js me default Server Component hota hai.
// Lekin yahan useState, onClick, onChange use ho rahe hain — ye sab client-side chalte hain.
// Isliye "use client" likhna zaroori hai, warna React hooks kaam nahi karenge.

import React, { useState } from 'react'

// Comment ka data structure define kiya — taaki TypeScript ko pata ho har comment me kya hoga
type CommentItem = {
  id: string;        // Har comment ka unique pehchan (Reply button aur reply box ke liye zaroori)
  text: string;      // User ne jo comment likha
  replies: string[]; // Is comment ke andar ki saari replies — nested structure ke liye
}

const NestedComments = () => {

  // --- INPUT STATES ---
  // Dono alag rakhe kyunki ek waqt me sirf ek input active hota hai:
  // upar wala = naya main comment, neeche wala = kisi comment ka reply
  const [commentText, setCommentText] = useState("")
  const [replyText, setReplyText] = useState("")

  // --- DATA STATE ---
  // Saare comments + unki replies yahan store hote hain
  // Array of objects use kiya taaki har comment apni replies apne andar rakhe (nested feel)
  const [comments, setComments] = useState<CommentItem[]>([])

  // --- UI STATE ---
  // Kaunse comment ke neeche reply box dikhana hai — sirf ek hi open hona chahiye
  // null = koi reply box open nahi, string id = us comment ka reply box dikhao
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null)

  // ========== MAIN COMMENT ADD KARNA ==========
  const handleAddComment = () => {
    // Khali comment submit na ho — isliye trim() se spaces check karte hain
    if (commentText.trim() === "") return;

    const newComment: CommentItem = {
      // Date.now() se unique id — har comment alag pehchan le, map() me key ke liye bhi kaam aata hai
      id: Date.now().toString(),
      text: commentText,
      replies: [] // Naya comment — abhi koi reply nahi
    }

    // prev => [...prev, newComment] — purane comments safe rehte hain, naya end me add hota hai
    // Direct comments push nahi karte kyunki React me state mutate nahi karni chahiye
    setComments(prev => [...prev, newComment])
    setCommentText("") // Submit ke baad input khali — user naya comment likh sake
  }

  // ========== REPLY BOX KHOLNA ==========
  const handleOpenReplyBox = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Button ka id = comment ka id — isse pata chal jata hai kis comment par reply karna hai
    setActiveReplyId(e.currentTarget.id)
    setReplyText("") // Purana reply text clear — naye comment par purani typing na dikhe
  }

  // ========== REPLY SUBMIT KARNA ==========
  const handleSubmitReply = (parentId: string) => {
    if (replyText.trim() === "") return;

    // Saare comments loop karke sirf jis comment ki id match ho usme reply add karte hain
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === parentId) {
          // Spread operator se purana comment copy + nayi reply array me add
          // comment.replies mutate nahi ki — naya object banaya (React rule)
          return { ...comment, replies: [...comment.replies, replyText] }
        }
        return comment; // Baaki comments waise hi rehte hain
      })
    )

    setReplyText("")       // Reply input khali
    setActiveReplyId(null) // Reply box band — submit ke baad UI clean
  }

  return (
    <div className='flex flex-col items-center min-h-screen w-screen mt-10'>

      <h1 className='text-green-800 text-3xl p-6 m-6'>Nested Comment <hr /></h1>

      {/* --- MAIN COMMENT INPUT --- */}
      {/* Controlled input: value state se aati hai, onChange se state update — React pattern */}
      <div>
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className='mx-4 text-black p-1 rounded'
          type="text"
          placeholder="Write a comment..."
        />
        <button onClick={handleAddComment} className='bg-blue-600 h-8 w-20 text-white rounded-xl'>
          Comment
        </button>
      </div>

      {/* --- COMMENTS LIST --- */}
      {/* comments array map karke har comment ek card me dikhta hai */}
      <div className='w-full max-w-md mt-6'>
        {comments.map((comment) => (
          // key={comment.id} — React ko pata rahe kaunsa item kaunsa hai, re-render sahi ho
          <div className='flex flex-col gap-2 p-3 bg-gray-700 m-3 rounded shadow' key={comment.id}>

            {/* Comment text + Reply button ek row me */}
            <div className='flex justify-between items-center'>
              <h1 className='text-white text-lg'>{comment.text}</h1>
              <button
                id={comment.id}           // Ye id handleOpenReplyBox me activeReplyId set karti hai
                onClick={handleOpenReplyBox}
                className='bg-blue-500 w-16 text-sm text-white rounded-xl p-1'
              >
                Reply
              </button>
            </div>

            {/* --- REPLIES --- */}
            {/* Sirf tab dikhao jab replies hon — empty div na dikhe */}
            {comment.replies.length > 0 && (
              <div className='ml-6 mt-2 flex flex-col gap-1'>
                {/* ml-6 = left margin — replies thode andar dikhe, nested lagе */}
                {comment.replies.map((reply, ind) => (
                  <div key={ind} className='bg-gray-600 text-white p-2 rounded text-sm'>
                    ↳ {reply}
                  </div>
                ))}
              </div>
            )}

            {/* --- REPLY INPUT --- */}
            {/* Conditional render: sirf jis comment ki id === activeReplyId uske neeche input dikhe */}
            {activeReplyId === comment.id && (
              <div className='ml-6 mt-2 flex gap-2'>
                <input
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="p-1 rounded text-black text-sm w-full"
                  type="text"
                  placeholder="Type your reply..."
                />
                <button
                  onClick={() => handleSubmitReply(comment.id)} // parentId pass — kis comment me reply jayegi
                  className='bg-red-500 text-white text-sm rounded-xl p-1 whitespace-nowrap px-3'
                >
                  Submit
                </button>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  )
}

export default NestedComments
