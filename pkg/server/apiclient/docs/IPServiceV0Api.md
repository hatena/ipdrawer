# \IPServiceV0Api

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ActivateIP**](IPServiceV0Api.md#ActivateIP) | **Post** /api/v0/ip/{ip}/activate | 
[**DeactivateIP**](IPServiceV0Api.md#DeactivateIP) | **Post** /api/v0/ip/{ip}/deactivate | 
[**GetNetworkIncludingIP**](IPServiceV0Api.md#GetNetworkIncludingIP) | **Get** /api/v0/ip/{ip}/network | 
[**ListIP**](IPServiceV0Api.md#ListIP) | **Get** /api/v0/ip/list | 


# **ActivateIP**
> ServerpbActivateIpResponse ActivateIP($ip, $body)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 
 **body** | [**ServerpbActivateIpRequest**](ServerpbActivateIpRequest.md)|  | 

### Return type

[**ServerpbActivateIpResponse**](serverpbActivateIPResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DeactivateIP**
> ServerpbDeactivateIpResponse DeactivateIP($ip)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 

### Return type

[**ServerpbDeactivateIpResponse**](serverpbDeactivateIPResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetNetworkIncludingIP**
> ServerpbGetNetworkResponse GetNetworkIncludingIP($ip)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **string**|  | 

### Return type

[**ServerpbGetNetworkResponse**](serverpbGetNetworkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListIP**
> ServerpbListIpResponse ListIP()




### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerpbListIpResponse**](serverpbListIPResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

