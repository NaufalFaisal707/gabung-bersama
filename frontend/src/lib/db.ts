import { Dexie, type EntityTable } from 'dexie';

export interface IContact {
	id?: string; // unique identifier for the contact
	name: string;
	type: 'self_contact' | 'other_contact' | 'group_contact';
}

export interface IContactMessage {
	id?: string; // unique identifier for the message
	sender: string; // sender of the message (user)
	from: string; // sender of the message (can be a user or a group)
	to: string; // recipient of the message (can be self user or other user)
	reply_to_message_id?: string; // the message id this message is replying to
	message: string; // the message content
	client_created_at: number; // the timestamp when the message was created
	server_created_at?: number; // the timestamp when the message was created by the server
}

const db = new Dexie('KitaChat') as Dexie & {
	contacts: EntityTable<IContact>;
	contact_messages: EntityTable<IContactMessage>;
};

db.version(1).stores({
	contacts: 'id, name, type',
	contact_messages:
		'id, sender, from, to, client_created_at, server_created_at, reply_to_message_id, [from+to], [to+from]'
});

export default db;
