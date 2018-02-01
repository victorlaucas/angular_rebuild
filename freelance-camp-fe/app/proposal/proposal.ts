export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: string,
    public hourly_rate?: string,
    public weeks_to_complete?: string,
    public client_email?: string
  ) {}
}