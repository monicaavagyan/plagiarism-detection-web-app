<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="styles/sign-up-page.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap">
</head>
<body>

<main>
    <nav>
        <div id="header-img">
            <a href="/"><img src="static/images/logo.png" alt="Logo"></a>        
        </div>
        <div class="nav-container">
            <a href="{{route('login')}}" class="sign-in">Sign in</a>
            <a href="{{route('register')}}" class="sign-up">Sign up</a>
        </div>
    </nav>

    <div class="form-container">
        <h1>Welcome back!</h1>
        <p class="subtitle">Please enter your credentials to get your account.</p>

        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="form-group">
                <label for="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email here"
                    value="{{ old('email') }}" required autocomplete="email" autofocus
                />
                @error('email')
                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                @enderror
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    name="password" required autocomplete="current-password"
                />
                @error('password')
                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                @enderror
            </div>

            <div class="options">
                <div class="remember-me">
                    <input type="checkbox" id="remember" name="remember" />
                    <label for="remember">Remember Me</label>
                </div>
                <a href="#" class="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" class="btn-submit">Sign In Now</button>
        </form>

        <p class="sign-in-redirect">
            Dont have an account? <a href="/register">Sign up here!</a>
        </p>
    </div>
</main>
</body>
</html>
