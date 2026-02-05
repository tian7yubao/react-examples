// npm install react-hook-form

import { useForm, SubmitHandler } from "react-hook-form";

interface User {
    username: string;
    age: number;
}

export function ReactHookForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<User>();

    const onSubmit: SubmitHandler<User> = (user: User) => {
        console.log(user);
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div>
                <input className="p-2 border" type="text" { ...register("username", {
                    required: true,
                    pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "须包含大小写字母"
                    }
                }) } />
                {
                    errors.username && (
                        <span className="text-rose-600">{ errors.username.message }</span>
                    )
                }
            </div>
            <div>
                <input className="p-2 border" type="number" { ...register("age", {
                    required: true,
                    min: { value: 18, message: "年龄不能低于18岁" },
                    max: { value: 100, message: "年龄不能超过100岁" }
                }) } />
                {
                    errors.age && (
                        <span className="text-rose-600">{ errors.age.message }</span>
                    )
                }
            </div>
            <button type="submit">submit</button>
        </form>
    )
}