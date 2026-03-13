import axios from "axios";
import { useState } from "react";

function UploadQuestion() {

const [category,setCategory] = useState("java");
const [question,setQuestion] = useState("");
const [answer,setAnswer] = useState("");

const [selectedCategory,setSelectedCategory] = useState("");
const [questions,setQuestions] = useState([]);

const [editId,setEditId] = useState(null);
const [editQuestion,setEditQuestion] = useState("");
const [editAnswer,setEditAnswer] = useState("");

const handleUpload = async (e) => {

e.preventDefault();

try{

const res = await axios.post(
"https://interviewr-backend.onrender.com/api/questions/add-question",
{category,question,answer}
);

alert(res.data.message);

setQuestion("");
setAnswer("");

}catch(error){
console.log(error);
alert("Upload failed");
}

};


const loadQuestions = async (cat)=>{

setSelectedCategory(cat);

try{

const res = await axios.get(
`https://interviewr-backend.onrender.com/api/questions/${cat}`
);

setQuestions(res.data);

}catch(err){
console.log(err);
}

};


const deleteQuestion = async(id)=>{

await axios.delete(
`https://interviewr-backend.onrender.com/api/questions/delete/${id}`
);

setQuestions(questions.filter(q=>q._id !== id));

};


const startEdit = (q)=>{

setEditId(q._id);
setEditQuestion(q.question);
setEditAnswer(q.answer);

};


const updateQuestion = async ()=>{

await axios.put(
`https://interviewr-backend.onrender.com/api/questions/update/${editId}`,
{
question:editQuestion,
answer:editAnswer
}
);

alert("Updated Successfully");

setEditId(null);

loadQuestions(selectedCategory);

};


return(

<div className="min-h-screen bg-gray-100 py-10">

<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">

<h2 className="text-2xl font-bold mb-6 text-center">
Upload Interview Question
</h2>

<form onSubmit={handleUpload} className="space-y-4">

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
className="w-full border p-3 rounded"
>

<option value="java">Java</option>
<option value="javascript">JavaScript</option>
<option value="react">React</option>
<option value="node">Node</option>
<option value="express">Express</option>
<option value="mongodb">MongoDB</option>
<option value="mysql">MySQL</option>
<option value="html">HTML</option>
<option value="css">CSS</option>
<option value="bootstrap">Bootstrap</option>
<option value="tailwind">Tailwind</option>
<option value="linux">Linux</option>
<option value="git">Git</option>
<option value="github">GitHub</option>
<option value="shell">Shell Script</option>
<option value="docker">Docker</option>
<option value="aws">AWS</option>
<option value="dsa">DSA</option>
<option value="ml">ML</option>
<option value="python">Python</option>
<option value="HR">HR</option>
<option value="AI">AI</option>

</select>

<textarea
placeholder="Enter Question"
value={question}
onChange={(e)=>setQuestion(e.target.value)}
className="w-full border p-3 rounded"
/>

<textarea
placeholder="Enter Answer"
value={answer}
onChange={(e)=>setAnswer(e.target.value)}
className="w-full border p-3 rounded"
/>

<button
type="submit"
className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
>
Upload Question
</button>

</form>

<hr className="my-10"/>

<h2 className="text-2xl font-bold mb-6 text-center">
Manage Questions
</h2>


<div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-8">

<button onClick={()=>loadQuestions("java")} className="bg-blue-600 text-white p-2 rounded">Java</button>
<button onClick={()=>loadQuestions("react")} className="bg-blue-600 text-white p-2 rounded">React</button>
<button onClick={()=>loadQuestions("javascript")} className="bg-blue-600 text-white p-2 rounded">JavaScript</button>
<button onClick={()=>loadQuestions("node")} className="bg-blue-600 text-white p-2 rounded">Node</button>
<button onClick={()=>loadQuestions("express")} className="bg-blue-600 text-white p-2 rounded">Express</button>
<button onClick={()=>loadQuestions("mongodb")} className="bg-blue-600 text-white p-2 rounded">MongoDB</button>
<button onClick={()=>loadQuestions("mysql")} className="bg-blue-600 text-white p-2 rounded">MySQL</button>
<button onClick={()=>loadQuestions("python")} className="bg-blue-600 text-white p-2 rounded">Python</button>
<button onClick={()=>loadQuestions("HR")} className="bg-blue-600 text-white p-2 rounded">HR</button>
<button onClick={()=>loadQuestions("html")} className="bg-blue-600 text-white p-2 rounded">HTML</button>
<button onClick={()=>loadQuestions("css")} className="bg-blue-600 text-white p-2 rounded">CSS</button>
<button onClick={()=>loadQuestions("ml")} className="bg-blue-600 text-white p-2 rounded">ML</button>
<button onClick={()=>loadQuestions("AI")} className="bg-blue-600 text-white p-2 rounded">AI</button>
<button onClick={()=>loadQuestions("dsa")} className="bg-blue-600 text-white p-2 rounded">DSA</button>

</div>


{questions.map((q,index)=>(

<div
key={q._id}
className="border rounded-lg p-5 mb-4 shadow-sm bg-gray-50"
>

{editId === q._id ? (

<div className="space-y-3">

<p className="font-semibold">Question {index+1}</p>

<textarea
value={editQuestion}
onChange={(e)=>setEditQuestion(e.target.value)}
className="w-full border p-3 rounded"
/>

<textarea
value={editAnswer}
onChange={(e)=>setEditAnswer(e.target.value)}
className="w-full border p-3 rounded"
/>

<button
onClick={updateQuestion}
className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
>
Update
</button>

</div>

):( 

<div>

<p className="font-bold text-lg mb-2">
Question {index+1}
</p>

<p className="mb-2">{q.question}</p>

<p className="text-gray-700 mb-4">{q.answer}</p>

<div className="flex gap-3">

<button
onClick={()=>startEdit(q)}
className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
>
Update
</button>

<button
onClick={()=>deleteQuestion(q._id)}
className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
>
Delete
</button>

</div>

</div>

)}

</div>

))}

</div>

</div>

);

}

export default UploadQuestion;