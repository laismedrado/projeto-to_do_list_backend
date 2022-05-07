USE `joy-419749-lais-silva`;

CREATE TABLE to_do_list_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
	nickname VARCHAR (255) NOT NULL
);

CREATE TABLE to_do_list_tasks (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL,
    description VARCHAR (1000) DEFAULT "No description provided",
    limitDate DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR (64),
    foreign key (author_id) REFERENCES to_do_list_users(id)
);

CREATE TABLE to_do_list_assignees (
    task_id VARCHAR(255),
	assignee_id VARCHAR(255),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
);

SELECT * FROM to_do_list_users;
SELECT * FROM to_do_list_assignees;
SELECT * FROM to_do_list_tasks;

DESCRIBE to_do_list_assignees;
DESCRIBE to_do_list_tasks;
DESCRIBE to_do_list_users;