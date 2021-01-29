/**
 * DTO para encapsular los datos que se envía cuando inician sesión ante al sistema
 */
export class AuthenticationResponseDTO {
    public id: number;
    public user: string;
	public clave: string;
}
