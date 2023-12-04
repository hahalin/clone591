const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="//sale.591.com.tw">
                    <img src="//s.591.com.tw/build/static/house/saleList/images/logo.png?time=2023-08-08" alt="Logo" />
                </a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="請輸入社區/街道名稱搜尋" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">搜尋</button>
                </form>
            </div>
        </nav>
    );
};

export default Header;
