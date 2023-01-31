ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)

RegisterNetEvent("rl_Notif")
AddEventHandler("rl_Notif", function(color, title, message)
    SendNUIMessage({
        color = color,
        title = title,
        message = message
    })
    PlaySoundFrontend(-1, "ATM_WINDOW", "HUD_FRONTEND_DEFAULT_SOUNDSET", 1)
end)

RegisterCommand("id", function()
	TriggerEvent("rl_Notif", "#ff7b00", "Information", "Votre ID: " ..GetPlayerServerId(PlayerId()).. " ")
end)