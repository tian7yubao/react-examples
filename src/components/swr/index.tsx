// npm install swr

import useSWR from "swr";

interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetcher(id: string): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`);
    return await response.json();
}

export function Swr() {

    const { error, isLoading, data } = useSWR("1", fetcher);

    if (error) {
        return (
            <div>error</div>
        )
    }

    if (isLoading) {
        return (
            <div>loading</div>
        )
    }

    return (
        <pre>{ JSON.stringify(data, null, 2) }</pre>
    )

}