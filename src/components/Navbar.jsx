const Navbar = () => {
    return (
        <>
            <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
                <div class="container">
                    <a href="#" class="navbar-brand">
                        <span class="brand-text font-weight-light">Muebleria</span>
                    </a>

                    <button
                        class="navbar-toggler order-1"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse order-3" id="navbarCollapse">
                        <ul class="navbar-nav">

                            <li class="nav-item dropdown">
                                <a
                                    id="dropdownSubMenu1"
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="nav-link dropdown-toggle"
                                >
                                    Categorias
                                </a>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    class="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <a href="#" class="dropdown-item">
                                            Mostrar{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item">
                                            Insertar
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    id="dropdownSubMenu1"
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="nav-link dropdown-toggle"
                                >
                                    Productos
                                </a>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    class="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <a href="#" class="dropdown-item">
                                            Mostrar{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item">
                                            Insertar
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    id="dropdownSubMenu1"
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="nav-link dropdown-toggle"
                                >
                                    Registro de salidas / entradas
                                </a>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    class="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <a href="#" class="dropdown-item">
                                            Mostrar{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item">
                                            Insertar
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a
                                    id="dropdownSubMenu1"
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    class="nav-link dropdown-toggle"
                                >
                                    Registro de Usuarios
                                </a>
                                <ul
                                    aria-labelledby="dropdownSubMenu1"
                                    class="dropdown-menu border-0 shadow"
                                >
                                    <li>
                                        <a href="#" class="dropdown-item">
                                            Mostrar{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="dropdown-item">
                                            Insertar
                                        </a>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
