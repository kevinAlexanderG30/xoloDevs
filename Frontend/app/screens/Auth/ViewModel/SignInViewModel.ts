export const SignInViewModel = async (username: string | null, password: string | null) => {
    try {
        const req = await fetch(`http://192.168.1.12:8000/login/`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
        });

        if (!req.ok) {
            const errorResponse = await req.text();
            console.error(`Error ${req.status}:`, errorResponse);
            throw new Error(`Error de autenticación: ${req.statusText}`);
        }

        const resp = await req.json();
        return resp;

    } catch (e) {
        console.error('Error durante la autenticación:', e);
        return null;
    }
};
