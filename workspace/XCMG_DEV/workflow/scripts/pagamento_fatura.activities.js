var Activity = {
	ABERTURA: 0,
	INICIO: 4,
	GATEWAY_ENVOLVE_FISCAL: 12,
	LANCAR_NOTA: 111,
	GATEWAY_LANCADO: 47,
	GATEWAY_CORRIGIR: 94,
	AVALIAR_GERENTE_AREA: 16,
	AVALIAR_DIRETOR_AREA: 19,
	GATEWAY_ENVOLVE_CONTROLADORIA: 21,
	AVALIAR_CONTROLADORIA: 31,
	AVALIAR_GERENTE_FINANCEIRO: 74,
	GATEWAY_ENVOLVE_DIRETOR_FINANCEIRO: 78,
	AVALIAR_DIRETOR_FINANCEIRO: 33,
	GATEWAY_ENVOLVE_PRESIDENTE: 43,
	AVALIAR_PRESIDENTE: 35,
    GATEWAY_PA: 86,
    DEFINIR_CONTA_PA: 89,
    SERVICE_TITULO_PAGAR: 65,
    SERVICE_TITULO_RECEBER: 57,
    VERIFICAR_SITUACAO: 69,
	AGUARDAR_VENCIMENTO: 82,
	RECEBIDO_CONFERIDO: 52,
	FIM_PAGO: 40
	
	, wasIntegrated: function(state){
		return state == Activity.DEFINIR_CONTA_PA
			|| state == Activity.SERVICE_TITULO_PAGAR
			|| state == Activity.SERVICE_TITULO_RECEBER
			|| state == Activity.VERIFICAR_SITUACAO
			|| state == Activity.AGUARDAR_VENCIMENTO
			|| state == Activity.RECEBIDO_CONFERIDO
			|| state == Activity.FIM_PAGO;
	}
	, isBeginning: function(state){
		return state == Activity.ABERTURA
			|| state == Activity.INICIO;
	}
};