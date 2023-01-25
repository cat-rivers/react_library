import "./MyPage.css";
const MyPage = () => {
    return (
            <div><br /><br /><br /><br />
                <fieldset>
                    <legend>Hi Teppo Testaaja, welcome to library </legend>
                            <div>You have borrowed these books:<br />
                            <ul>

                            <i>Eric Elliott</i><br />
                            Programming JavaScript Applications
                            Robust Web architecture with Node, HTML5, and Modern JS Libraries
                            <br />
                            2014</ul>
                            Borrowed until: 12.12.2020
                            </div>                            <br />
                        
                            <ul><button>Return</button></ul><br />
                        <label>State: Signed in.</label>
                </fieldset>
            </div>
    )
}

export default MyPage