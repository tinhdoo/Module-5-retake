import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HeadComponent() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/facilities?search=${keyword}`);
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Furama</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/facilities">Quản lý dịch vụ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/facility/create">Thêm mới</Link>
                        </li>
                    </ul>

                    <form className="d-flex" onSubmit={handleSearch}>
                        <input
                            className="form-control me-2"
                            type="search"
                            aria-label="Search"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Tìm kiếm
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}