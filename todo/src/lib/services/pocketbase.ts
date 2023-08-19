import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

const url = 'http://0.0.0.0:8090';

export const pb = new PocketBase(url)
export const user = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    console.log({auth});
    user.set(pb.authStore.model);
});

