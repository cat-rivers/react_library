import "./MyPage.css";
const MyPage = () => {
    return (
            <div><br />
                
                    <b>Hi Teppo Testaaja, welcome to library </b><p />
                            <div id="box">You have borrowed these books:<br />
                            <ul>
                            
                            <i>Eric Elliott</i><br />
                            <b>Programming JavaScript Applications
                            Robust Web architecture with Node, HTML5, and Modern JS Libraries</b><br />
                            2014<p />   
                            Borrowed until: 12.12.2020 <button>Return</button>
                            </ul><br />
                            </div>           
                <br />
                        <label>State: Signed in.</label>
            </div>
    )
}

export default MyPage