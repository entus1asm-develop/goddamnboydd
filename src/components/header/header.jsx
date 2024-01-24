import './header.scss';

function Header() {
    return <header>
        <h1>Harry Potter</h1>
        <h3>View all characters from the Harry Potter universe</h3>

        <div className='inputs'>
            <form action="">
                <div className='school'>
                <label htmlFor="1">Name</label>
                <input type="text" id='1'/>
                </div>

                <div>
                <select name='school' id=''>
                    <option value="">Chose one</option>
                    <option value="">Gryffindor</option>
                    <option value="">Slytherin</option>
                    <option value="">Hafflepuf</option>
                    <option value="">Ravenclaw</option>
                </select>
                </div>

            </form>
        </div>
    </header>
}

export default Header;