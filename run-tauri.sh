#!/bin/bash

# Run with a clean environment, keeping only essential GUI and system variables
exec env -i \
    HOME="$HOME" \
    USER="$USER" \
    PATH="$PATH" \
    DISPLAY="$DISPLAY" \
    XAUTHORITY="$XAUTHORITY" \
    DBUS_SESSION_BUS_ADDRESS="$DBUS_SESSION_BUS_ADDRESS" \
    TERM="$TERM" \
    SHELL="$SHELL" \
    IS_TAURI="true" \
    WEBKIT_DISABLE_SANDBOX_THIS_IS_DANGEROUS=1 \
    "$@"
