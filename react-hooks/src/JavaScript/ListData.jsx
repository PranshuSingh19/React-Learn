
function ListData(){

    const Listinfo = 
    [
        {
            name: 'Math',
            topics: ['Algebra', 'Geometry' , "Maths"]
          },
          {
            name: 'Science',
            topics: ['Physics', 'Chemistry']
          }
    ]

    return(

        <>
        {
            Listinfo.map((subject, i)=>(

                <div> 
                    <ul>
                         {/* Any separator can be specified. */}
                        {/* the join() method in JavaScript to convert the array into a comma-separated string. */}
                        <li key={i}> <b>Subjects Name is:</b> {subject.name} 
                        <b> & Topics name is</b> {subject.topics.join(' | ')} </li>
                    </ul>
                </div>
            ))
        }
        </>
    )
}
export default ListData;