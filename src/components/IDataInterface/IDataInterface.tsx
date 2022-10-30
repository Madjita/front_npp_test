
export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    middleName : string,
    tools: ITool[],
}

export interface ITool {
    id: number,
    name: string,
    count: number,
    tool_users: IUser[],
}

export interface ITool_User {
    id: number,
    toolId: number,
    tool: ITool,
    userId: number,
    user: IUser,
    getCount: number
}